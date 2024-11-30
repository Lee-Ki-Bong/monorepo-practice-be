import { Column, Entity } from "typeorm";

@Entity("neodesign_tag_display", { schema: "makeshop" })
export class NeodesignTagDisplay {
  @Column("int", {
    primary: true,
    name: "tag_id",
    unsigned: true,
    default: () => "'0'",
  })
  tagId: number;

  @Column("int", {
    primary: true,
    name: "tl_uid",
    unsigned: true,
    default: () => "'0'",
  })
  tlUid: number;

  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;
}
