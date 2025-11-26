import { Badge } from "@/components/ui/badge";
import { authOptions } from "@/lib/auth";
import { prismaClient } from "@/lib/prisma";
import { PackageSearchIcon } from "lucide-react";
import { getServerSession } from "next-auth";
import OrderItem from "./components/order-item";
import MotionContainer from "@/components/ui/motion-container";

export const dynamic = "force-dynamic";

async function OrderPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return (
      <div className="flex h-full max-w-[1280px] flex-col items-center justify-center gap-2 p-5 lg:mx-auto">
        <h2 className="font-bold">Acesso Negado!</h2>
        <p className="text-sm opacity-60">Faça login para ver seus pedidos</p>
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
  });

  return (
    <div className="mt-20 max-w-[1280px] max-xl:p-5 lg:mx-auto xl:py-5">
      <MotionContainer delay={0.1}>
        <Badge variant="heading">
          <PackageSearchIcon size={16} />
          Meus Pedidos
        </Badge>
      </MotionContainer>

      <MotionContainer className="mt-5 flex flex-col gap-5" delay={0.2}>
        {orders.map((order) => (
          <OrderItem key={order.id} order={order} />
        ))}
      </MotionContainer>
    </div>
  );
}

export default OrderPage;
