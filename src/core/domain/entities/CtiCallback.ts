import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("basic_idx", ["adminuser", "id"], {})
@Index("date_idx", ["adminuser", "id", "inputdate"], {})
@Entity("cti_callback", { schema: "makeshop" })
export class CtiCallback {
  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "id", length: 12 })
  id: string;

  @Column("datetime", {
    name: "inputdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  inputdate: Date;

  @Column("varchar", { name: "callback_number", length: 30 })
  callbackNumber: string;

  @Column("varchar", { name: "caller_number", length: 30 })
  callerNumber: string;

  @Column("varchar", { name: "extension", length: 50 })
  extension: string;

  @Column("datetime", {
    name: "resultdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  resultdate: Date;

  @Column("enum", {
    name: "status",
    enum: ["", "N", "Y", "D"],
    default: () => "'N'",
  })
  status: "" | "N" | "Y" | "D";
}
