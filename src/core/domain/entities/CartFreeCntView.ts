import { Column, Entity, Index } from "typeorm";

@Index("view_uid", ["adminuser", "viewUid"], {})
@Entity("cart_free_cnt_view", { schema: "makeshop" })
export class CartFreeCntView {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("date", {
    primary: true,
    name: "view_date",
    default: () => "'0000-00-00'",
  })
  viewDate: string;

  @Column("int", {
    primary: true,
    name: "view_uid",
    unsigned: true,
    default: () => "'0'",
  })
  viewUid: number;

  @Column("enum", {
    primary: true,
    name: "is_login",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  isLogin: "" | "Y" | "N";

  @Column("int", { name: "PC", unsigned: true, default: () => "'0'" })
  pc: number;

  @Column("int", { name: "MOBILE", unsigned: true, default: () => "'0'" })
  mobile: number;
}
