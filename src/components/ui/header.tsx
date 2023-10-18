import { MenuIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import Image from "next/image";
import lozzatoImg from "../../../public/lozzato.svg";

const Header = () => {
  return (
    <Card className="flex justify-between p-[1.875rem] items-center">
      <Button size="icon" variant='outline' className="p-2">
        <MenuIcon />
      </Button>

      <h1 className="text-lg font-semibold"><span className="text-primary">Lozzato</span> Store</h1>

      <Button size="icon" variant='outline' className="p-2">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};

export default Header;
