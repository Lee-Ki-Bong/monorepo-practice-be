import { Column, Entity } from "typeorm";

@Entity("smartfinder_except_cate", { schema: "makeshop" })
export class SmartfinderExceptCate {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("char", { primary: true, name: "cate1", length: 3 })
  cate1: string;

  @Column("char", { primary: true, name: "cate2", length: 3 })
  cate2: string;

  @Column("char", { primary: true, name: "cate3", length: 3 })
  cate3: string;

  @Column("enum", {
    name: "cate_type",
    enum: ["", "NORMAL", "VIRTUAL"],
    default: () => "'NORMAL'",
  })
  cateType: "" | "NORMAL" | "VIRTUAL";

  @Column("datetime", {
    name: "date_regist",
    default: () => "'0000-00-00 00:00:00'",
  })
  dateRegist: Date;
}
