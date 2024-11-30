import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("apno_id", ["apnoId"], {})
@Entity("app_notice", { schema: "makeshop" })
export class AppNotice {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "apno_id", unsigned: true })
  apnoId: number;

  @Column("datetime", {
    name: "apno_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  apnoDate: Date;

  @Column("int", { name: "apno_cnt", unsigned: true, default: () => "'0'" })
  apnoCnt: number;

  @Column("varchar", { name: "apno_subject", nullable: true, length: 120 })
  apnoSubject: string | null;

  @Column("mediumtext", { name: "apno_content", nullable: true })
  apnoContent: string | null;
}
