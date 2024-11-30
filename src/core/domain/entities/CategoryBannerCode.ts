import { Column, Entity } from "typeorm";

@Entity("category_banner_code", { schema: "makeshop" })
export class CategoryBannerCode {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "code", length: 9 })
  code: string;

  @Column("int", { name: "cb_uid", unsigned: true, default: () => "'0'" })
  cbUid: number;

  @Column("int", {
    primary: true,
    name: "sort_num",
    unsigned: true,
    default: () => "'0'",
  })
  sortNum: number;

  @Column("varchar", {
    name: "display_flag",
    length: 10,
    default: () => "'all'",
  })
  displayFlag: string;

  @Column("varchar", {
    name: "range_flag",
    length: 10,
    default: () => "'fixed'",
  })
  rangeFlag: string;
}
