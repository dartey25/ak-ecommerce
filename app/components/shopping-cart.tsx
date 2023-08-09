import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { CartForm } from "./shopping-cart-form";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
export function ShoppingCart() {
  return (
    <Sheet>
      <SheetTrigger>
        <ShoppingCartIcon className="w-5 h-5" />
      </SheetTrigger>
      <SheetContent>
        <CartForm />
      </SheetContent>
    </Sheet>
  );
}
