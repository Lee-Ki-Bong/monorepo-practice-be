import { Column, Entity, Index } from "typeorm";

@Index("number", ["adminuser", "couponnum", "date"], {})
@Entity("offlinecoupon", { schema: "makeshop" })
export class Offlinecoupon {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "number", length: 16 })
  number: string;

  @Column("varchar", { name: "couponnum", length: 8 })
  couponnum: string;

  @Column("varchar", { name: "id", nullable: true, length: 20 })
  id: string | null;

  @Column("varchar", { name: "date", nullable: true, length: 14 })
  date: string | null;
}
