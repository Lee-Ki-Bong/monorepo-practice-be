import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_id", ["id"], {})
@Index("valid_date", ["adminuser", "authType", "validDate"], {})
@Entity("auth_admin", { schema: "makeshop" })
export class AuthAdmin {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", {
    name: "auth_type",
    length: 12,
    default: () => "'OLD_ADMIN'",
  })
  authType: string;

  @Column("varchar", {
    name: "auth_method",
    length: 10,
    default: () => "'PHONE'",
  })
  authMethod: string;

  @Column("varchar", { name: "auth_key", length: 128 })
  authKey: string;

  @Column("varchar", { name: "status", length: 12, default: () => "'VALID'" })
  status: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("datetime", {
    name: "valid_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  validDate: Date;
}
