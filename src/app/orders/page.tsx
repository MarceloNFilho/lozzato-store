import { authOptions } from "@/lib/auth";
import { prismaClient } from "@/lib/prisma";
import { LockIcon, PackageSearchIcon } from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import OrderItem from "./components/order-item";
import PageHeader from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";

export const dynamic = "force-dynamic";

export const metadata = { title: "Meus pedidos" };

async function OrderPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return (
      <div className="page-container flex min-h-[70vh] flex-col items-center justify-center gap-6 pt-24 text-center">
        <span className="chamfer flex h-20 w-20 items-center justify-center bg-black/[0.04] text-foreground/40">
          <LockIcon size={26} strokeWidth={1.5} />
        </span>
        <div className="flex flex-col gap-2">
          <h1 className="font-display text-2xl font-semibold uppercase tracking-[0.04em]">
            Acesso restrito
          </h1>
          <p className="text-sm text-muted-foreground">
            Faça login para acompanhar seus pedidos.
          </p>
        </div>
      </div>
    );
  }

  const orders = await prismaClient.order.findMany({
    where: {
      userId: session.user.id,
    },
    include: {
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="page-container flex flex-col gap-12 pb-24">
      <PageHeader
        title="Meus pedidos"
        icon={<PackageSearchIcon />}
        breadcrumb={[{ label: "Meus pedidos" }]}
        meta={`${orders.length} ${orders.length === 1 ? "pedido" : "pedidos"}`}
      />

      {orders.length > 0 ? (
        <div className="flex flex-col gap-4">
          {orders.map((order) => (
            <OrderItem
              key={order.id}
              order={JSON.parse(JSON.stringify(order))} // Convert Decimals/Dates to plain objects/strings
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-6 py-20 text-center">
          <p className="text-sm text-muted-foreground">
            Você ainda não fez nenhum pedido.
          </p>
          <Button asChild variant="outline">
            <Link href="/catalog">Explorar catálogo</Link>
          </Button>
        </div>
      )}
    </div>
  );
}

export default OrderPage;
