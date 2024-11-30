import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_uid", ["uid"], {})
@Entity("search_randing", { schema: "makeshop" })
export class SearchRanding {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid" })
  uid: number;

  @Column("varchar", { primary: true, name: "keyword", length: 30 })
  keyword: string;

  @Column("varchar", { name: "pc", length: 255 })
  pc: string;

  @Column("varchar", { name: "mo", length: 255 })
  mo: string;

  @Column("datetime", {
    name: "start_date",
    nullable: true,
    default: () => "'0000-00-00 00:00:00'",
  })
  startDate: Date | null;

  @Column("datetime", {
    name: "end_date",
    nullable: true,
    default: () => "'0000-00-00 00:00:00'",
  })
  endDate: Date | null;
}
