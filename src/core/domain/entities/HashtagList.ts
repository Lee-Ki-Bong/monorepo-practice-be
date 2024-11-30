import { Column, Entity } from "typeorm";

@Entity("hashtag_list", { schema: "makeshop" })
export class HashtagList {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("mediumtext", { name: "htl_tag_name" })
  htlTagName: string;
}
