import { Column, Entity } from "typeorm";

@Entity("brand2_old", { schema: "makeshop" })
export class Brand2Old {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "brandcode2", length: 12 })
  brandcode2: string;

  @Column("varchar", { primary: true, name: "brandcode", length: 6 })
  brandcode: string;

  @Column("char", { name: "cate1", nullable: true, length: 3 })
  cate1: string | null;

  @Column("char", { name: "cate2", nullable: true, length: 3 })
  cate2: string | null;

  @Column("char", { primary: true, name: "cate3", length: 3 })
  cate3: string;

  @Column("varchar", { name: "date", nullable: true, length: 14 })
  date: string | null;
}
