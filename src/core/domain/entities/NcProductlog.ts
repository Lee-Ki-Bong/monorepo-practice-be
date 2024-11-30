import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("user", ["adminuser", "id"], {})
@Entity("nc_productlog", { schema: "makeshop" })
export class NcProductlog {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "nhnshopid", length: 12 })
  nhnshopid: string;

  @Column("int", { name: "puid", unsigned: true, default: () => "'0'" })
  puid: number;

  @Column("int", { name: "uid", unsigned: true, default: () => "'0'" })
  uid: number;

  @Column("varchar", { name: "ip", length: 15 })
  ip: string;

  @Column("datetime", {
    name: "regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  regdate: Date;
}
