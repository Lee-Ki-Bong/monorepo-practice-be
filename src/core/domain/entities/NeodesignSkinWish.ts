import { Column, Entity } from "typeorm";

@Entity("neodesign_skin_wish", { schema: "makeshop" })
export class NeodesignSkinWish {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "skin_type", length: 15 })
  skinType: string;

  @Column("int", {
    primary: true,
    name: "skin_idx",
    unsigned: true,
    default: () => "'0'",
  })
  skinIdx: number;
}
