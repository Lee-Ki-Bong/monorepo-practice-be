import { Column, Entity, Index } from "typeorm";

@Index("s_data", ["sData"], { fulltext: true })
@Entity("smartfinder_search_data", { schema: "makeshop" })
export class SmartfinderSearchData {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("mediumtext", { name: "s_data" })
  sData: string;
}
