import { Column, Entity } from "typeorm";

@Entity("brandoption", { schema: "makeshop" })
export class Brandoption {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", { primary: true, name: "optioncode", default: () => "'0'" })
  optioncode: number;

  @Column("varchar", { name: "title", nullable: true, length: 250 })
  title: string | null;

  @Column("varchar", { name: "optionselect", nullable: true, length: 22 })
  optionselect: string | null;

  @Column("mediumtext", { name: "optionvalue0", nullable: true })
  optionvalue0: string | null;

  @Column("mediumtext", { name: "optionvalue1", nullable: true })
  optionvalue1: string | null;

  @Column("mediumtext", { name: "optionvalue2", nullable: true })
  optionvalue2: string | null;

  @Column("mediumtext", { name: "optionvalue3", nullable: true })
  optionvalue3: string | null;

  @Column("mediumtext", { name: "optionvalue4", nullable: true })
  optionvalue4: string | null;

  @Column("mediumtext", { name: "optionvalue5", nullable: true })
  optionvalue5: string | null;

  @Column("mediumtext", { name: "optionvalue6", nullable: true })
  optionvalue6: string | null;

  @Column("mediumtext", { name: "optionvalue7", nullable: true })
  optionvalue7: string | null;

  @Column("mediumtext", { name: "optionvalue8", nullable: true })
  optionvalue8: string | null;

  @Column("mediumtext", { name: "optionvalue9", nullable: true })
  optionvalue9: string | null;
}
