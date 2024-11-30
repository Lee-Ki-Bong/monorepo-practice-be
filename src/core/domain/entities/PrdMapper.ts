import { Column, Entity, Index } from "typeorm";

@Index("adminuser", ["adminuser", "uid", "display", "isBasic"], {})
@Index("category_id", ["adminuser", "cateId"], {})
@Entity("prd_mapper", { schema: "makeshop" })
export class PrdMapper {
  @Column("char", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "cate_id",
    unsigned: true,
    default: () => "'0'",
  })
  cateId: number;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("enum", {
    name: "display",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  display: "" | "N" | "Y";

  @Column("enum", {
    name: "is_basic",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  isBasic: "" | "Y" | "N";

  @Column("datetime", {
    name: "register_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  registerDate: Date;
}
