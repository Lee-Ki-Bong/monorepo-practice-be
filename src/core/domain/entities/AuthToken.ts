import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("auth_token", ["adminuser", "authType", "userId", "authToken"], {})
@Index("idx_auto_uid", ["uid"], {})
@Index("valid_date", ["validDate"], {})
@Entity("auth_token", { schema: "makeshop" })
export class AuthToken {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "auth_type", length: 10 })
  authType: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { name: "user_id", length: 20 })
  userId: string;

  @Column("varchar", {
    name: "expire_type",
    nullable: true,
    length: 10,
    default: () => "'TIME'",
  })
  expireType: string | null;

  @Column("varchar", { name: "auth_token", length: 128 })
  authToken: string;

  @Column("datetime", {
    name: "valid_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  validDate: Date;
}
