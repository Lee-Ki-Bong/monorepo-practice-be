import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_no", ["no"], {})
@Entity("spigen_shopinfo", { schema: "makeshop" })
export class SpigenShopinfo {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "no", unsigned: true })
  no: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("char", { name: "area", length: 2 })
  area: string;

  @Column("char", { name: "type", length: 2 })
  type: string;

  @Column("char", { name: "type2", length: 2 })
  type2: string;

  @Column("varchar", { name: "addr", length: 255 })
  addr: string;

  @Column("varchar", { name: "phone1", length: 30 })
  phone1: string;

  @Column("varchar", { name: "phone2", length: 30 })
  phone2: string;

  @Column("varchar", { name: "phone3", length: 30 })
  phone3: string;

  @Column("varchar", { name: "map", length: 150 })
  map: string;

  @Column("varchar", { name: "week", length: 100 })
  week: string;

  @Column("varchar", { name: "weekend", length: 100 })
  weekend: string;

  @Column("longtext", { name: "description", nullable: true })
  description: string | null;

  @Column("varchar", { name: "holiday", length: 100 })
  holiday: string;

  @Column("varchar", { name: "upfile1", length: 50 })
  upfile1: string;

  @Column("varchar", { name: "upfile2", length: 50 })
  upfile2: string;

  @Column("varchar", { name: "upfile3", length: 50 })
  upfile3: string;

  @Column("varchar", { name: "upfile4", length: 50 })
  upfile4: string;

  @Column("mediumint", { name: "sort", unsigned: true, default: () => "'0'" })
  sort: number;

  @Column("varchar", { name: "regdate", length: 14 })
  regdate: string;
}
