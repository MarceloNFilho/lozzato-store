import {
  CreditCardIcon,
  PackageCheckIcon,
  SparklesIcon,
  TruckIcon,
} from "lucide-react";

const BENEFITS = [
  {
    icon: TruckIcon,
    title: "Frete grátis",
    description: "Para todo o Brasil, sem valor mínimo.",
  },
  {
    icon: SparklesIcon,
    title: "Curadoria pro",
    description: "Razer, Logitech, HyperX e outras referências.",
  },
  {
    icon: CreditCardIcon,
    title: "Pagamento seguro",
    description: "Checkout criptografado via Stripe.",
  },
  {
    icon: PackageCheckIcon,
    title: "Acompanhe tudo",
    description: "Status de cada pedido direto na sua conta.",
  },
];

const Benefits = () => {
  return (
    <section className="page-container">
      <div className="grid grid-cols-2 gap-px overflow-hidden border-y border-border lg:grid-cols-4">
        {BENEFITS.map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex flex-col gap-4 py-8 pr-4 lg:py-10">
            <Icon size={22} strokeWidth={1.5} className="text-foreground" />
            <div className="flex flex-col gap-1.5">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.12em]">
                {title}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
