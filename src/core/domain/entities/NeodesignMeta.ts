import { Column, Entity } from "typeorm";

@Entity("neodesign_meta", { schema: "makeshop" })
export class NeodesignMeta {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "page_type", length: 20 })
  pageType: string;

  @Column("int", {
    primary: true,
    name: "design_id",
    unsigned: true,
    default: () => "'1'",
  })
  designId: number;

  @Column("varchar", { name: "separator1", length: 30 })
  separator1: string;

  @Column("varchar", { name: "page_title", length: 255 })
  pageTitle: string;

  @Column("mediumtext", { name: "meta_data" })
  metaData: string;
}
