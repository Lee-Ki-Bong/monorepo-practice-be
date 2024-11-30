import { Column, Entity } from "typeorm";

@Entity("neodesign_tag_group_display", { schema: "makeshop" })
export class NeodesignTagGroupDisplay {
  @Column("int", {
    primary: true,
    name: "tg_uid",
    unsigned: true,
    default: () => "'0'",
  })
  tgUid: number;

  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;
}
