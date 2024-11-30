import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("callback_params", ["callbackParams"], { unique: true })
@Index("param_idx", ["adminuser", "callbackParams"], {})
@Entity("cashfriends_param", { schema: "makeshop" })
export class CashfriendsParam {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", {
    name: "user_id",
    nullable: true,
    length: 20,
    default: () => "'0'",
  })
  userId: string | null;

  @Column("varchar", { name: "callback_params", unique: true, length: 255 })
  callbackParams: string;

  @Column("smallint", { name: "success", unsigned: true, default: () => "'0'" })
  success: number;

  @Column("mediumint", {
    name: "http_status_code",
    unsigned: true,
    default: () => "'0'",
  })
  httpStatusCode: number;

  @Column("longtext", { name: "response_body", nullable: true })
  responseBody: string | null;

  @Column("datetime", {
    name: "create_at",
    default: () => "'0000-00-00 00:00:00'",
  })
  createAt: Date;

  @Column("datetime", {
    name: "updated_at",
    default: () => "'0000-00-00 00:00:00'",
  })
  updatedAt: Date;

  @Column("datetime", {
    name: "requested_at",
    default: () => "'0000-00-00 00:00:00'",
  })
  requestedAt: Date;

  @Column("datetime", {
    name: "completed_at",
    default: () => "'0000-00-00 00:00:00'",
  })
  completedAt: Date;
}
