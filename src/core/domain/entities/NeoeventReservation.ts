import { Column, Entity } from "typeorm";

@Entity("neoevent_reservation", { schema: "makeshop" })
export class NeoeventReservation {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", {
    primary: true,
    name: "ev_no",
    length: 20,
    default: () => "'0'",
  })
  evNo: string;

  @Column("mediumtext", { name: "pc_contents", nullable: true })
  pcContents: string | null;

  @Column("mediumtext", { name: "mobile_contents", nullable: true })
  mobileContents: string | null;

  @Column("mediumtext", { name: "pc_contents_backup", nullable: true })
  pcContentsBackup: string | null;

  @Column("mediumtext", { name: "mobile_contents_backup", nullable: true })
  mobileContentsBackup: string | null;

  @Column("datetime", {
    name: "reservation_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  reservationDate: Date;
}
