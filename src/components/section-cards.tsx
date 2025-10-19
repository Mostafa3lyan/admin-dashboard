import { FaRegUser } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { RiCoinsLine } from "react-icons/ri";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total Users</CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between gap-1.5 text-sm">
          <FaRegUser size={50} />
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            500
          </CardTitle>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total Orders</CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between gap-1.5 text-sm">
          <FiShoppingCart size={50} />
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            1250
          </CardTitle>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total Vistors</CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between gap-1.5 text-sm">
          <HiOutlineUserGroup size={50} />
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            7522
          </CardTitle>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total Sales</CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between gap-1.5 text-sm">
          <RiCoinsLine size={50} />
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            $1,250.00
          </CardTitle>
        </CardFooter>
      </Card>
    </div>
  );
}
