import { Column, Entity } from "typeorm";

@Entity("importune", { schema: "makeshop" })
export class Importune {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "importune_type",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  importuneType: "" | "Y" | "N";

  @Column("char", {
    name: "importune_detailbtn_type",
    length: 1,
    default: () => "'A'",
  })
  importuneDetailbtnType: string;

  @Column("varchar", { name: "importune_top_img", nullable: true, length: 30 })
  importuneTopImg: string | null;

  @Column("varchar", {
    name: "importune_bottom_img",
    nullable: true,
    length: 30,
  })
  importuneBottomImg: string | null;

  @Column("varchar", {
    name: "importune_detailbtn_img",
    nullable: true,
    length: 30,
  })
  importuneDetailbtnImg: string | null;

  @Column("varchar", {
    name: "importune_wishbtn_img",
    nullable: true,
    length: 30,
  })
  importuneWishbtnImg: string | null;
}
