import { Column, Entity, Index } from "typeorm";

@Index("adminuser", ["adminuser", "position"], {})
@Entity("xl_security", { schema: "makeshop" })
export class XlSecurity {
  @Column("varchar", { name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "hphone", length: 20 })
  hphone: string;

  @Column("char", { name: "position", length: 1 })
  position: string;

  @Column("char", { name: "locking", nullable: true, length: 1 })
  locking: string | null;

  @Column("varchar", { name: "expire_date", nullable: true, length: 12 })
  expireDate: string | null;

  @Column("varchar", { name: "certi_key", nullable: true, length: 8 })
  certiKey: string | null;
}
