import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_id", ["id"], {})
@Index("reg_date", ["adminuser", "regDate"], {})
@Index("user_id", ["adminuser", "userId"], {})
@Entity("linkprice_user", { schema: "makeshop" })
export class LinkpriceUser {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "user_id", length: 20 })
  userId: string;

  @Column("varchar", { name: "unique_id", length: 30 })
  uniqueId: string;

  @Column("mediumtext", { name: "lpinfo" })
  lpinfo: string;

  @Column("mediumtext", { name: "user_agent" })
  userAgent: string;

  @Column("varchar", { name: "ip", length: 50 })
  ip: string;

  @Column("varchar", { name: "device_type", length: 11 })
  deviceType: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
