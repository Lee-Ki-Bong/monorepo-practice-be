import { Column, Entity, Index } from "typeorm";

@Index("adminuser", ["adminuser", "email"], { unique: true })
@Entity("nonuser_receive", { schema: "makeshop" })
export class NonuserReceive {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "emailreceive",
    enum: ["", "M", "S", "Y", "N"],
    default: () => "'Y'",
  })
  emailreceive: "" | "M" | "S" | "Y" | "N";

  @Column("varchar", { name: "email", nullable: true, length: 50 })
  email: string | null;

  @Column("varchar", { primary: true, name: "etcphone", length: 20 })
  etcphone: string;

  @Column("date", { name: "reg_date", nullable: true })
  regDate: string | null;
}
