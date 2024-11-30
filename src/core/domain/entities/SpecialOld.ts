import { Column, Entity, Index } from "typeorm";

@Index("adminuserspecial", ["adminuser", "special"], {})
@Index("NAME", ["special"], {})
@Entity("special_old", { schema: "makeshop" })
export class SpecialOld {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "brandcode", length: 12 })
  brandcode: string;

  @Column("char", { name: "special", length: 1 })
  special: string;

  @Column("varchar", { name: "date", nullable: true, length: 14 })
  date: string | null;
}
