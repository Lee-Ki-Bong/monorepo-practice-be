import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_p_id", ["pId"], {})
@Index("simple", ["adminuser", "pSimpleAddress", "pDisplay"], {})
@Entity("partner_info", { schema: "makeshop" })
export class PartnerInfo {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "p_type", length: 10 })
  pType: string;

  @PrimaryGeneratedColumn({ type: "int", name: "p_id", unsigned: true })
  pId: number;

  @Column("varchar", { name: "p_name", length: 30 })
  pName: string;

  @Column("varchar", { name: "p_code", nullable: true, length: 10 })
  pCode: string | null;

  @Column("varchar", { name: "p_staff_name", length: 20 })
  pStaffName: string;

  @Column("varchar", { name: "p_staff_phone", length: 20 })
  pStaffPhone: string;

  @Column("varchar", { name: "p_post", length: 10 })
  pPost: string;

  @Column("varchar", { name: "p_addr", length: 250 })
  pAddr: string;

  @Column("varchar", { name: "p_addr2", length: 250 })
  pAddr2: string;

  @Column("varchar", { name: "p_simple_address", length: 10 })
  pSimpleAddress: string;

  @Column("enum", {
    name: "p_display",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  pDisplay: "" | "Y" | "N";

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("datetime", {
    name: "mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  modDate: Date;
}
