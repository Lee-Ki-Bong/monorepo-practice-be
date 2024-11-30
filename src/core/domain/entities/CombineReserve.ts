import { Column, Entity, Index } from "typeorm";

@Index("admin_combine_date", ["adminuser", "combineDate"], {})
@Index("admin_insert_date", ["adminuser", "insertDate"], {})
@Index("config_uid", ["adminuser", "configUid", "reserve", "id"], {})
@Index("date", ["adminuser", "date"], {})
@Index("end_date", ["adminuser", "endDate", "id"], {})
@Index("id", ["adminuser", "id"], {})
@Index("rel_type", ["adminuser", "id", "relType", "rel1", "rel2", "rel3"], {})
@Entity("combine_reserve", { schema: "makeshop" })
export class CombineReserve {
  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "id", nullable: true, length: 20 })
  id: string | null;

  @Column("varchar", { name: "date", length: 14 })
  date: string;

  @Column("int", { name: "reserve", nullable: true })
  reserve: number | null;

  @Column("varchar", { name: "end_date", nullable: true, length: 14 })
  endDate: string | null;

  @Column("int", { name: "org_reserve_uid", nullable: true, unsigned: true })
  orgReserveUid: number | null;

  @Column("int", { name: "config_uid", nullable: true, unsigned: true })
  configUid: number | null;

  @Column("varchar", { name: "content", nullable: true, length: 255 })
  content: string | null;

  @Column("enum", {
    name: "status",
    nullable: true,
    enum: ["", "SHOW", "HIDE"],
    default: () => "'SHOW'",
  })
  status: "" | "SHOW" | "HIDE" | null;

  @Column("char", {
    name: "rel_type",
    nullable: true,
    length: 3,
    default: () => "'E'",
  })
  relType: string | null;

  @Column("varchar", { name: "rel1", nullable: true, length: 50 })
  rel1: string | null;

  @Column("varchar", { name: "rel2", nullable: true, length: 40 })
  rel2: string | null;

  @Column("varchar", { name: "rel3", nullable: true, length: 40 })
  rel3: string | null;

  @Column("mediumtext", { name: "rel", nullable: true })
  rel: string | null;

  @Column("datetime", {
    name: "insert_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  insertDate: Date;

  @Column("datetime", {
    primary: true,
    name: "combine_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  combineDate: Date;
}
