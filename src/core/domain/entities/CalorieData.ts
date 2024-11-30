import { Column, Entity, Index } from "typeorm";

@Index("cal_cate1", ["calCate1", "calDisplay", "calSort"], {})
@Entity("calorie_data", { schema: "makeshop" })
export class CalorieData {
  @Column("int", {
    primary: true,
    name: "cal_cate1",
    unsigned: true,
    default: () => "'0'",
  })
  calCate1: number;

  @Column("int", {
    primary: true,
    name: "cal_cate2",
    unsigned: true,
    default: () => "'0'",
  })
  calCate2: number;

  @Column("varchar", { name: "cal_value", length: 255 })
  calValue: string;

  @Column("float", { name: "cal_kcal", precision: 12, default: () => "'0'" })
  calKcal: number;

  @Column("float", { name: "cal_car", precision: 12, default: () => "'0'" })
  calCar: number;

  @Column("float", { name: "cal_pro", precision: 12, default: () => "'0'" })
  calPro: number;

  @Column("float", { name: "cal_fat", precision: 12, default: () => "'0'" })
  calFat: number;

  @Column("int", { name: "cal_sort", unsigned: true, default: () => "'0'" })
  calSort: number;

  @Column("enum", {
    name: "cal_display",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  calDisplay: "" | "Y" | "N";
}
