import { Column, Entity } from "typeorm";

@Entity("powerapp_push_group_temp", { schema: "makeshop" })
export class PowerappPushGroupTemp {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    primary: true,
    name: "temp_type",
    enum: ["", "USER"],
    default: () => "'USER'",
  })
  tempType: "" | "USER";

  @Column("varchar", { primary: true, name: "temp_user_id", length: 20 })
  tempUserId: string;

  @Column("varchar", { primary: true, name: "temp_device_key", length: 40 })
  tempDeviceKey: string;

  @Column("enum", {
    name: "temp_os",
    nullable: true,
    enum: ["", "IOS", "ANDROID"],
  })
  tempOs: "" | "IOS" | "ANDROID" | null;

  @Column("varchar", { name: "temp_address", nullable: true, length: 4 })
  tempAddress: string | null;

  @Column("int", { name: "temp_age", nullable: true })
  tempAge: number | null;

  @Column("enum", {
    name: "temp_sex",
    nullable: true,
    enum: ["", "male", "female"],
  })
  tempSex: "" | "male" | "female" | null;

  @Column("varchar", { name: "temp_group_id", nullable: true, length: 4 })
  tempGroupId: string | null;

  @Column("int", { name: "temp_group_grade", nullable: true })
  tempGroupGrade: number | null;

  @Column("int", { name: "temp_conn_date", nullable: true })
  tempConnDate: number | null;

  @Column("int", { name: "temp_conn_time", nullable: true })
  tempConnTime: number | null;

  @Column("datetime", {
    name: "temp_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  tempDate: Date;
}
