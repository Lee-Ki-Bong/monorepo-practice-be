import { Column, Entity } from "typeorm";

@Entity("user_shoppay_auth", { schema: "makeshop" })
export class UserShoppayAuth {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "user_id", length: 40 })
  userId: string;

  @Column("varchar", { name: "authkey", length: 255 })
  authkey: string;

  @Column("enum", {
    name: "use_swipe_pay",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  useSwipePay: "" | "Y" | "N";
}
