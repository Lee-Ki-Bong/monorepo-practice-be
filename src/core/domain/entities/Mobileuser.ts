import { Column, Entity } from "typeorm";

@Entity("mobileuser", { schema: "makeshop" })
export class Mobileuser {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "id", length: 20 })
  id: string;

  @Column("mediumtext", { name: "mobileinfo", nullable: true })
  mobileinfo: string | null;
}
