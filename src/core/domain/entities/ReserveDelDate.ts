import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("date", ["adminuser", "date"], {})
@Index("id", ["adminuser", "id"], {})
@Index("idx_auto_uid", ["uid"], {})
@Entity("reserve_del_date", { schema: "makeshop" })
export class ReserveDelDate {
  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "id", nullable: true, length: 20 })
  id: string | null;

  @Column("varchar", { name: "date", length: 14 })
  date: string;

  @Column("int", { name: "reserve", nullable: true })
  reserve: number | null;

  @Column("date", { name: "end_date", nullable: true })
  endDate: string | null;

  @Column("int", { name: "org_reserve_uid", nullable: true, unsigned: true })
  orgReserveUid: number | null;

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

  @Column("mediumtext", { name: "rel", nullable: true })
  rel: string | null;
}
