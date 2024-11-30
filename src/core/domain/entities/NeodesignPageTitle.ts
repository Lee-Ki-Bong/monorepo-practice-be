import { Column, Entity, Index } from "typeorm";

@Index(
  "display_type",
  ["adminuser", "pageType", "tagType", "separator1", "displayType"],
  {}
)
@Entity("neodesign_page_title", { schema: "makeshop" })
export class NeodesignPageTitle {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "page_type", length: 20 })
  pageType: string;

  @Column("varchar", {
    primary: true,
    name: "tag_type",
    length: 10,
    default: () => "'seo'",
  })
  tagType: string;

  @Column("varchar", { primary: true, name: "separator1", length: 30 })
  separator1: string;

  @Column("char", { name: "display_type", length: 1, default: () => "'Y'" })
  displayType: string;

  @Column("varchar", { name: "page_title", length: 255 })
  pageTitle: string;

  @Column("char", { name: "page_image_type", length: 1, default: () => "'N'" })
  pageImageType: string;

  @Column("varchar", { name: "page_image", length: 255 })
  pageImage: string;

  @Column("mediumtext", { name: "page_description", nullable: true })
  pageDescription: string | null;

  @Column("mediumtext", { name: "page_keywords", nullable: true })
  pageKeywords: string | null;

  @Column("set", {
    name: "path_type",
    enum: ["PC", "MOBILE"],
    default: () => ["PC", "MOBILE"],
  })
  pathType: ("PC" | "MOBILE")[];

  @Column("mediumtext", { name: "page_addinfo", nullable: true })
  pageAddinfo: string | null;
}
