import { Column, Entity } from "typeorm";

@Entity("associated_service_info", { schema: "makeshop" })
export class AssociatedServiceInfo {
  @Column("varchar", { primary: true, name: "service_type", length: 20 })
  serviceType: string;

  @Column("varchar", { name: "service_title", nullable: true, length: 255 })
  serviceTitle: string | null;

  @Column("varchar", { name: "category", length: 40 })
  category: string;

  @Column("set", {
    name: "version_type",
    enum: ["ver1", "oo", "unify"],
    default: () => ["ver1", "oo", "unify"],
  })
  versionType: ("ver1" | "oo" | "unify")[];

  @Column("char", { name: "display_type", length: 1, default: () => "'N'" })
  displayType: string;

  @Column("smallint", {
    name: "sort_num",
    unsigned: true,
    default: () => "'0'",
  })
  sortNum: number;

  @Column("varchar", { name: "keyword", nullable: true, length: 255 })
  keyword: string | null;

  @Column("mediumtext", { name: "addinfo", nullable: true })
  addinfo: string | null;
}
