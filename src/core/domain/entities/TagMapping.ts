import { Column, Entity } from "typeorm";

@Entity("_tag_mapping", { schema: "makeshop" })
export class TagMapping {
  @Column("mediumint", {
    primary: true,
    name: "tag_uid",
    unsigned: true,
    default: () => "'0'",
  })
  tagUid: number;

  @Column("smallint", { name: "chk_id", unsigned: true, default: () => "'0'" })
  chkId: number;
}
