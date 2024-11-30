import { Column, Entity } from "typeorm";

@Entity("navercategory", { schema: "makeshop" })
export class Navercategory {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "brandcode", length: 12 })
  brandcode: string;

  @Column("varchar", { name: "movecode", nullable: true, length: 12 })
  movecode: string | null;

  @Column("varchar", { name: "movedate", nullable: true, length: 8 })
  movedate: string | null;

  @Column("varchar", { name: "brandid", nullable: true, length: 4 })
  brandid: string | null;

  @Column("varchar", { name: "category", nullable: true, length: 8 })
  category: string | null;

  @Column("varchar", { name: "date", length: 14 })
  date: string;

  @Column("char", { name: "type", nullable: true, length: 1 })
  type: string | null;

  @Column("varchar", { name: "brname", nullable: true, length: 50 })
  brname: string | null;

  @Column("varchar", { name: "catename", nullable: true, length: 255 })
  catename: string | null;

  @Column("varchar", { name: "imgdate", nullable: true, length: 14 })
  imgdate: string | null;
}
