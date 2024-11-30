import { Column, Entity } from "typeorm";

@Entity("addtitle", { schema: "makeshop" })
export class Addtitle {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("varchar", { name: "addtitle0", nullable: true, length: 100 })
  addtitle0: string | null;

  @Column("varchar", { name: "addtitle1", nullable: true, length: 100 })
  addtitle1: string | null;

  @Column("varchar", { name: "addtitle2", nullable: true, length: 100 })
  addtitle2: string | null;

  @Column("varchar", { name: "addtitle3", nullable: true, length: 100 })
  addtitle3: string | null;

  @Column("varchar", { name: "addtitle4", nullable: true, length: 100 })
  addtitle4: string | null;

  @Column("varchar", { name: "addtitle5", nullable: true, length: 100 })
  addtitle5: string | null;

  @Column("varchar", { name: "addtitle6", nullable: true, length: 100 })
  addtitle6: string | null;

  @Column("varchar", { name: "addtitle7", nullable: true, length: 100 })
  addtitle7: string | null;

  @Column("varchar", { name: "addtitle8", nullable: true, length: 100 })
  addtitle8: string | null;

  @Column("varchar", { name: "addtitle9", nullable: true, length: 100 })
  addtitle9: string | null;

  @Column("varchar", { name: "addvalue0", nullable: true, length: 255 })
  addvalue0: string | null;

  @Column("varchar", { name: "addvalue1", nullable: true, length: 255 })
  addvalue1: string | null;

  @Column("varchar", { name: "addvalue2", nullable: true, length: 255 })
  addvalue2: string | null;

  @Column("varchar", { name: "addvalue3", nullable: true, length: 255 })
  addvalue3: string | null;

  @Column("varchar", { name: "addvalue4", nullable: true, length: 255 })
  addvalue4: string | null;

  @Column("varchar", { name: "addvalue5", nullable: true, length: 255 })
  addvalue5: string | null;

  @Column("varchar", { name: "addvalue6", nullable: true, length: 255 })
  addvalue6: string | null;

  @Column("varchar", { name: "addvalue7", nullable: true, length: 255 })
  addvalue7: string | null;

  @Column("varchar", { name: "addvalue8", nullable: true, length: 255 })
  addvalue8: string | null;

  @Column("varchar", { name: "addvalue9", nullable: true, length: 255 })
  addvalue9: string | null;

  @Column("varchar", { name: "date", nullable: true, length: 8 })
  date: string | null;
}
