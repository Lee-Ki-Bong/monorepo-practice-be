import { Column, Entity } from "typeorm";

@Entity("nomalize_review_gid", { schema: "makeshop" })
export class NomalizeReviewGid {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "gid", length: 30 })
  gid: string;

  @Column("int", { name: "cnt", unsigned: true, default: () => "'0'" })
  cnt: number;

  @Column("int", { name: "photocnt", unsigned: true, default: () => "'0'" })
  photocnt: number;
}
