import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("adminuser", ["adminuser", "date"], {})
@Index("idx_auto_uid", ["uid"], {})
@Entity("unpayment_list", { schema: "makeshop" })
export class UnpaymentList {
  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "name", length: 20 })
  name: string;

  @Column("date", { name: "date", default: () => "'0000-00-00'" })
  date: string;

  @Column("varchar", { name: "bank_name", length: 20 })
  bankName: string;

  @Column("int", { name: "price", unsigned: true, default: () => "'0'" })
  price: number;
}
