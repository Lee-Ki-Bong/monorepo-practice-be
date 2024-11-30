import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("date", ["adminuser", "date"], {})
@Index("id", ["adminuser", "id"], {})
@Index("idx_auto_uid", ["uid"], {})
@Index("subadmin", ["adminuser", "subadmin"], {})
@Entity("temp_emoney", { schema: "makeshop" })
export class TempEmoney {
  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "subadmin", length: 12 })
  subadmin: string;

  @Column("varchar", { name: "oksubadmin", nullable: true, length: 12 })
  oksubadmin: string | null;

  @Column("varchar", { name: "id", nullable: true, length: 20 })
  id: string | null;

  @Column("datetime", { name: "date", default: () => "'0000-00-00 00:00:00'" })
  date: Date;

  @Column("int", { name: "emoney", nullable: true })
  emoney: number | null;

  @Column("varchar", { name: "content", nullable: true, length: 50 })
  content: string | null;

  @Column("enum", {
    name: "confirm",
    nullable: true,
    enum: ["", "N", "Y", "D"],
    default: () => "'N'",
  })
  confirm: "" | "N" | "Y" | "D" | null;

  @Column("mediumtext", { name: "rel", nullable: true })
  rel: string | null;
}
