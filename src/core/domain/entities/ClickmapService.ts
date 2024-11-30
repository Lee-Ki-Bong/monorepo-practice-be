import { Column, Entity } from "typeorm";

@Entity("clickmap_service", { schema: "makeshop" })
export class ClickmapService {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("datetime", {
    name: "set_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  setDate: Date;

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

  @Column("char", { name: "shopstatus", nullable: true, length: 2 })
  shopstatus: string | null;

  @Column("varchar", { name: "server", nullable: true, length: 200 })
  server: string | null;

  @Column("mediumtext", { name: "auth_page", nullable: true })
  authPage: string | null;
}
