import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bigmatch_comment", { schema: "makeshop" })
export class BigmatchComment {
  @PrimaryGeneratedColumn({ type: "int", name: "code", unsigned: true })
  code: number;

  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", { primary: true, name: "bigmatch_code", default: () => "'0'" })
  bigmatchCode: number;

  @Column("varchar", { primary: true, name: "brand_code", length: 12 })
  brandCode: string;

  @Column("varchar", { name: "userid", length: 33, default: () => "'null'" })
  userid: string;

  @Column("varchar", { name: "hname", length: 30 })
  hname: string;

  @Column("varchar", { name: "pwd", length: 32 })
  pwd: string;

  @Column("int", { name: "reserve", default: () => "'0'" })
  reserve: number;

  @Column("mediumtext", { name: "comment" })
  comment: string;

  @Column("datetime", {
    name: "regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  regdate: Date;
}
