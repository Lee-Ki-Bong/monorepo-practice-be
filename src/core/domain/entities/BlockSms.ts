import { Column, Entity, Index } from "typeorm";

@Index("date", ["adminuser", "date"], {})
@Entity("block_sms", { schema: "makeshop" })
export class BlockSms {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "phone", length: 30 })
  phone: string;

  @Column("varchar", { name: "blockmess", nullable: true, length: 255 })
  blockmess: string | null;

  @Column("datetime", { name: "date", default: () => "'0000-00-00 00:00:00'" })
  date: Date;
}
