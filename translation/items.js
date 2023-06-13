const items = new Map([
    ["金合欢木船", "acacia_boat"],
    ["金合欢木运输船", "acacia_boat_with_chest"],
    ["悦灵刷怪蛋", "allay_spawn_egg"],
    ["紫水晶碎片", "amethyst_shard"],
    ["垂钓纹样陶片", "angler_pottery_sherd"],
    ["苹果", "apple"],
    ["弓箭纹样陶片", "archer_pottery_sherd"],
    ["举臂纹样陶片", "arms_up_pottery_sherd"],
    ["箭", "arrow"],
    ["衰变之箭", "arrow_of_decay"],
    ["抗火之箭", "arrow_of_fire_resistance"],
    ["伤害之箭", "arrow_of_harming"],
    ["治疗之箭", "arrow_of_healing"],
    ["隐身之箭", "arrow_of_invisibility"],
    ["跳跃之箭", "arrow_of_leaping"],
    ["幸运之箭", "arrow_of_luck"],
    ["夜视之箭", "arrow_of_night_vision"],
    ["剧毒之箭", "arrow_of_poison"],
    ["再生之箭", "arrow_of_regeneration"],
    ["缓降之箭", "arrow_of_slow_falling"],
    ["迟缓之箭", "arrow_of_slowness"],
    ["喷溅之箭", "arrow_of_splashing"],
    ["力量之箭", "arrow_of_strength"],
    ["迅捷之箭", "arrow_of_swiftness"],
    ["神龟之箭", "arrow_of_the_turtle_master"],
    ["水肺之箭", "arrow_of_water_breathing"],
    ["虚弱之箭", "arrow_of_weakness"],
    ["滞留型粗制的药水", "awkward_lingering_potion"],
    ["粗制的药水", "awkward_potion"],
    ["喷溅型粗制的药水", "awkward_splash_potion"],
    ["斧", "axe"],
    ["美西螈刷怪蛋", "axolotl_spawn_egg"],
    ["烤马铃薯", "baked_potato"],
    ["竹子", "bamboo"],
    ["竹筏", "bamboo_raft"],
    ["运输竹筏", "bamboo_raft_with_chest"],
    ["旗帜图案", "banner_pattern"],
    ["蝙蝠刷怪蛋", "bat_spawn_egg"],
    ["蜜蜂刷怪蛋", "bee_spawn_egg"],
    ["甜菜根", "beetroot"],
    ["甜菜种子", "beetroot_seeds"],
    ["甜菜汤", "beetroot_soup"],
    ["白桦木船", "birch_boat"],
    ["白桦木运输船", "birch_boat_with_chest"],
    ["黑色蜡烛", "black_candle"],
    ["黑色染料", "black_dye"],
    ["利刃纹样陶片", "blade_pottery_sherd"],
    ["烈焰粉", "blaze_powder"],
    ["烈焰棒", "blaze_rod"],
    ["烈焰人刷怪蛋", "blaze_spawn_egg"],
    ["蓝色蜡烛", "blue_candle"],
    ["蓝色染料", "blue_dye"],
    ["骨头", "bone"],
    ["骨粉", "bone_meal"],
    ["书", "book"],
    ["书与笔", "book_and_quill"],
    ["靴子", "boots"],
    ["附魔之瓶", "bottle_o_enchanting"],
    ["弓", "bow"],
    ["碗", "bowl"],
    ["面包", "bread"],
    ["佳酿纹样陶片", "brewer_pottery_sherd"],
    ["红砖", "brick"],
    ["棕色蜡烛", "brown_candle"],
    ["棕色染料", "brown_dye"],
    ["刷子", "brush"],
    ["铁桶", "bucket"],
    ["美西螈桶", "bucket_of_axolotl"],
    ["鳕鱼桶", "bucket_of_cod"],
    ["河豚桶", "bucket_of_pufferfish"],
    ["鲑鱼桶", "bucket_of_salmon"],
    ["蝌蚪桶", "bucket_of_tadpole"],
    ["热带鱼桶", "bucket_of_tropical_fish"],
    ["收纳袋", "bundle"],
    ["藏宝图", "buried_treasure_map"],
    ["烈焰纹样陶片", "burn_pottery_sherd"],
    ["骆驼刷怪蛋", "camel_spawn_egg"],
    ["蜡烛", "candle"],
    ["胡萝卜", "carrot"],
    ["胡萝卜钓竿", "carrot_on_a_stick"],
    ["猫刷怪蛋", "cat_spawn_egg"],
    ["洞穴蜘蛛刷怪蛋", "cave_spider_spawn_egg"],
    ["锁链靴子", "chainmail_boots"],
    ["锁链胸甲", "chainmail_chestplate"],
    ["锁链头盔", "chainmail_helmet"],
    ["锁链护腿", "chainmail_leggings"],
    ["木炭", "charcoal"],
    ["樱花木船", "cherry_boat"],
    ["樱花木运输船", "cherry_boat_with_chest"],
    ["鸡刷怪蛋", "chicken_spawn_egg"],
    ["紫颂果", "chorus_fruit"],
    ["黏土球", "clay_ball"],
    ["时钟", "clock"],
    ["小丑鱼", "clownfish"],
    ["煤炭", "coal"],
    ["海岸盔甲纹饰锻造模板", "coast_armor_trim_smithing_template"],
    ["可可豆", "cocoa_beans"],
    ["鳕鱼桶", "cod_bucket"],
    ["鳕鱼刷怪蛋", "cod_spawn_egg"],
    ["指南针", "compass"],
    ["熟鸡肉", "cooked_chicken"],
    ["熟鳕鱼", "cooked_cod"],
    ["熟羊肉", "cooked_mutton"],
    ["熟猪排", "cooked_porkchop"],
    ["熟兔肉", "cooked_rabbit"],
    ["熟鲑鱼", "cooked_salmon"],
    ["曲奇", "cookie"],
    ["铜锭", "copper_ingot"],
    ["牛刷怪蛋", "cow_spawn_egg"],
    ["苦力怕刷怪蛋", "creeper_spawn_egg"],
    ["弩", "crossbow"],
    ["青色蜡烛", "cyan_candle"],
    ["青色染料", "cyan_dye"],
    ["危机纹样陶片", "danger_pottery_sherd"],
    ["深色橡木船", "dark_oak_boat"],
    ["深色橡木运输船", "dark_oak_boat_with_chest"],
    ["调试棒", "debug_stick"],
    ["钻石", "diamond"],
    ["钻石斧", "diamond_axe"],
    ["钻石靴子", "diamond_boots"],
    ["钻石胸甲", "diamond_chestplate"],
    ["钻石头盔", "diamond_helmet"],
    ["钻石锄", "diamond_hoe"],
    ["钻石马铠", "diamond_horse_armor"],
    ["钻石护腿", "diamond_leggings"],
    ["钻石镐", "diamond_pickaxe"],
    ["钻石锹", "diamond_shovel"],
    ["钻石剑", "diamond_sword"],
    ["唱片残片", "disc_fragment"],
    ["海豚刷怪蛋", "dolphin_spawn_egg"],
    ["驴刷怪蛋", "donkey_spawn_egg"],
    ["龙息", "dragon_breath"],
    ["干海带", "dried_kelp"],
    ["溺尸刷怪蛋", "drowned_spawn_egg"],
    ["沙丘盔甲纹饰锻造模板", "dune_armor_trim_smithing_template"],
    ["回响碎片", "echo_shard"],
    ["鸡蛋", "egg"],
    ["远古守卫者刷怪蛋", "elder_guardian_spawn_egg"],
    ["鞘翅", "elytra"],
    ["绿宝石", "emerald"],
    ["空地图", "empty_map"],
    ["附魔书", "enchanted_book"],
    ["附魔金苹果", "enchanted_golden_apple"],
    ["末地水晶", "end_crystal"],
    ["末影龙刷怪蛋", "ender_dragon_spawn_egg"],
    ["末影珍珠", "ender_pearl"],
    ["末影人刷怪蛋", "enderman_spawn_egg"],
    ["末影螨刷怪蛋", "endermite_spawn_egg"],
    ["唤魔者刷怪蛋", "evoker_spawn_egg"],
    ["探险纹样陶片", "explorer_pottery_sherd"],
    ["眼眸盔甲纹饰锻造模板", "eye_armor_trim_smithing_template"],
    ["末影之眼", "eye_of_ender"],
    ["羽毛", "feather"],
    ["发酵蛛眼", "fermented_spider_eye"],
    ["火焰弹", "fire_charge"],
    ["烟花火箭", "firework_rocket"],
    ["烟火之星", "firework_star"],
    ["钓鱼竿", "fishing_rod"],
    ["燧石", "flint"],
    ["打火石", "flint_and_steel"],
    ["狐狸刷怪蛋", "fox_spawn_egg"],
    ["挚友纹样陶片", "friend_pottery_sherd"],
    ["青蛙刷怪蛋", "frog_spawn_egg"],
    ["恶魂刷怪蛋", "ghast_spawn_egg"],
    ["恶魂之泪", "ghast_tear"],
    ["玻璃瓶", "glass_bottle"],
    ["闪烁的西瓜片", "glistering_melon_slice"],
    ["发光浆果", "glow_berries"],
    ["荧光墨囊", "glow_ink_sac"],
    ["荧光物品展示框", "glow_item_frame"],
    ["发光鱿鱼刷怪蛋", "glow_squid_spawn_egg"],
    ["荧石粉", "glowstone_dust"],
    ["山羊角", "goat_horn"],
    ["山羊刷怪蛋", "goat_spawn_egg"],
    ["金锭", "gold_ingot"],
    ["金粒", "gold_nugget"],
    ["金苹果", "golden_apple"],
    ["金斧", "golden_axe"],
    ["金靴子", "golden_boots"],
    ["金胡萝卜", "golden_carrot"],
    ["金胸甲", "golden_chestplate"],
    ["金头盔", "golden_helmet"],
    ["金锄", "golden_hoe"],
    ["金马铠", "golden_horse_armor"],
    ["金护腿", "golden_leggings"],
    ["金镐", "golden_pickaxe"],
    ["金锹", "golden_shovel"],
    ["金剑", "golden_sword"],
    ["灰色蜡烛", "gray_candle"],
    ["灰色染料", "gray_dye"],
    ["绿色蜡烛", "green_candle"],
    ["绿色染料", "green_dye"],
    ["守卫者刷怪蛋", "guardian_spawn_egg"],
    ["火药", "gunpowder"],
    ["海洋之心", "heart_of_the_sea"],
    ["爱心纹样陶片", "heart_pottery_sherd"],
    ["心碎纹样陶片", "heartbreak_pottery_sherd"],
    ["疣猪兽刷怪蛋", "hoglin_spawn_egg"],
    ["蜂蜜瓶", "honey_bottle"],
    ["蜜脾", "honeycomb"],
    ["马刷怪蛋", "horse_spawn_egg"],
    ["雇主盔甲纹饰锻造模板", "host_armor_trim_smithing_template"],
    ["狼嚎纹样陶片", "howl_pottery_sherd"],
    ["尸壳刷怪蛋", "husk_spawn_egg"],
    ["墨囊", "ink_sac"],
    ["铁斧", "iron_axe"],
    ["铁靴子", "iron_boots"],
    ["铁胸甲", "iron_chestplate"],
    ["铁傀儡刷怪蛋", "iron_golem_spawn_egg"],
    ["铁头盔", "iron_helmet"],
    ["铁锄", "iron_hoe"],
    ["铁马铠", "iron_horse_armor"],
    ["铁锭", "iron_ingot"],
    ["铁护腿", "iron_leggings"],
    ["铁粒", "iron_nugget"],
    ["铁镐", "iron_pickaxe"],
    ["铁锹", "iron_shovel"],
    ["铁剑", "iron_sword"],
    ["物品展示框", "item_frame"],
    ["丛林木船", "jungle_boat"],
    ["丛林木运输船", "jungle_boat_with_chest"],
    ["海带", "kelp"],
    ["知识之书", "knowledge_book"],
    ["青金石", "lapis_lazuli"],
    ["熔岩桶", "lava_bucket"],
    ["拴绳", "lead"],
    ["皮革", "leather"],
    ["皮革靴子", "leather_boots"],
    ["皮革帽子", "leather_cap"],
    ["皮革马铠", "leather_horse_armor"],
    ["皮革裤子", "leather_pants"],
    ["皮革外套", "leather_tunic"],
    ["淡蓝色蜡烛", "light_blue_candle"],
    ["淡蓝色染料", "light_blue_dye"],
    ["淡灰色蜡烛", "light_gray_candle"],
    ["淡灰色染料", "light_gray_dye"],
    ["黄绿色蜡烛", "lime_candle"],
    ["黄绿色染料", "lime_dye"],
    ["滞留药水", "lingering_potion"],
    ["滞留型衰变药水", "lingering_potion_of_decay"],
    ["滞留型抗火药水", "lingering_potion_of_fire_resistance"],
    ["滞留型伤害药水", "lingering_potion_of_harming"],
    ["滞留型治疗药水", "lingering_potion_of_healing"],
    ["滞留型隐身药水", "lingering_potion_of_invisibility"],
    ["滞留型跳跃药水", "lingering_potion_of_leaping"],
    ["滞留型幸运药水", "lingering_potion_of_luck"],
    ["滞留型夜视药水", "lingering_potion_of_night_vision"],
    ["滞留型剧毒药水", "lingering_potion_of_poison"],
    ["滞留型再生药水", "lingering_potion_of_regeneration"],
    ["滞留型缓降药水", "lingering_potion_of_slow_falling"],
    ["滞留型迟缓药水", "lingering_potion_of_slowness"],
    ["滞留型力量药水", "lingering_potion_of_strength"],
    ["滞留型迅捷药水", "lingering_potion_of_swiftness"],
    ["滞留型神龟药水", "lingering_potion_of_the_turtle_master"],
    ["滞留型水肺药水", "lingering_potion_of_water_breathing"],
    ["滞留型虚弱药水", "lingering_potion_of_weakness"],
    ["滞留型水瓶", "lingering_water_bottle"],
    ["羊驼刷怪蛋", "llama_spawn_egg"],
    ["磁石指针", "lodestone_compass"],
    ["品红色蜡烛", "magenta_candle"],
    ["品红色染料", "magenta_dye"],
    ["岩浆膏", "magma_cream"],
    ["岩浆怪刷怪蛋", "magma_cube_spawn_egg"],
    ["红树木船", "mangrove_boat"],
    ["红树木运输船", "mangrove_boat_with_chest"],
    ["地图", "map"],
    ["西瓜种子", "melon_seeds"],
    ["西瓜片", "melon_slice"],
    ["奶桶", "milk_bucket"],
    ["矿车", "minecart"],
    ["运输矿车", "minecart_with_chest"],
    ["命令方块矿车", "minecart_with_command_block"],
    ["动力矿车", "minecart_with_furnace"],
    ["漏斗矿车", "minecart_with_hopper"],
    ["TNT矿车", "minecart_with_tnt"],
    ["采矿纹样陶片", "miner_pottery_sherd"],
    ["哞菇刷怪蛋", "mooshroom_spawn_egg"],
    ["悲恸纹样陶片", "mourner_pottery_sherd"],
    ["骡刷怪蛋", "mule_spawn_egg"],
    ["滞留型平凡的药水", "mundane_lingering_potion"],
    ["平凡的药水", "mundane_potion"],
    ["喷溅型平凡的药水", "mundane_splash_potion"],
    ["蘑菇煲", "mushroom_stew"],
    ["音乐唱片", "music_disc"],
    ["命名牌", "name_tag"],
    ["鹦鹉螺壳", "nautilus_shell"],
    ["下界砖", "nether_brick"],
    ["下界石英", "nether_quartz"],
    ["下界之星", "nether_star"],
    ["下界合金斧", "netherite_axe"],
    ["下界合金靴子", "netherite_boots"],
    ["下界合金胸甲", "netherite_chestplate"],
    ["下界合金头盔", "netherite_helmet"],
    ["下界合金锄", "netherite_hoe"],
    ["下界合金锭", "netherite_ingot"],
    ["下界合金护腿", "netherite_leggings"],
    ["下界合金镐", "netherite_pickaxe"],
    ["下界合金碎片", "netherite_scrap"],
    ["下界合金锹", "netherite_shovel"],
    ["下界合金剑", "netherite_sword"],
    ["下界合金升级锻造模板", "netherite_upgrade_smithing_template"],
    ["橡木船", "oak_boat"],
    ["橡木运输船", "oak_boat_with_chest"],
    ["海洋探险家地图", "ocean_explorer_map"],
    ["豹猫刷怪蛋", "ocelot_spawn_egg"],
    ["橙色蜡烛", "orange_candle"],
    ["橙色染料", "orange_dye"],
    ["画", "painting"],
    ["熊猫刷怪蛋", "panda_spawn_egg"],
    ["纸", "paper"],
    ["鹦鹉刷怪蛋", "parrot_spawn_egg"],
    ["幻翼膜", "phantom_membrane"],
    ["幻翼刷怪蛋", "phantom_spawn_egg"],
    ["镐", "pickaxe"],
    ["猪刷怪蛋", "pig_spawn_egg"],
    ["猪灵蛮兵刷怪蛋", "piglin_brute_spawn_egg"],
    ["猪灵刷怪蛋", "piglin_spawn_egg"],
    ["掠夺者刷怪蛋", "pillager_spawn_egg"],
    ["粉红色蜡烛", "pink_candle"],
    ["粉红色染料", "pink_dye"],
    ["瓶子草荚果", "pitcher_pod"],
    ["富饶纹样陶片", "plenty_pottery_sherd"],
    ["毒马铃薯", "poisonous_potato"],
    ["北极熊刷怪蛋", "polar_bear_spawn_egg"],
    ["爆裂紫颂果", "popped_chorus_fruit"],
    ["马铃薯", "potato"],
    ["药水", "potion"],
    ["衰变药水", "potion_of_decay"],
    ["抗火药水", "potion_of_fire_resistance"],
    ["伤害药水", "potion_of_harming"],
    ["治疗药水", "potion_of_healing"],
    ["隐身药水", "potion_of_invisibility"],
    ["跳跃药水", "potion_of_leaping"],
    ["幸运药水", "potion_of_luck"],
    ["夜视药水", "potion_of_night_vision"],
    ["剧毒药水", "potion_of_poison"],
    ["再生药水", "potion_of_regeneration"],
    ["缓降药水", "potion_of_slow_falling"],
    ["迟缓药水", "potion_of_slowness"],
    ["力量药水", "potion_of_strength"],
    ["迅捷药水", "potion_of_swiftness"],
    ["神龟药水", "potion_of_the_turtle_master"],
    ["水肺药水", "potion_of_water_breathing"],
    ["虚弱药水", "potion_of_weakness"],
    ["细雪桶", "powder_snow_bucket"],
    ["海晶砂粒", "prismarine_crystals"],
    ["海晶碎片", "prismarine_shard"],
    ["珍宝纹样陶片", "prize_pottery_sherd"],
    ["河豚", "pufferfish"],
    ["河豚桶", "pufferfish_bucket"],
    ["河豚刷怪蛋", "pufferfish_spawn_egg"],
    ["南瓜派", "pumpkin_pie"],
    ["南瓜种子", "pumpkin_seeds"],
    ["紫色蜡烛", "purple_candle"],
    ["紫色染料", "purple_dye"],
    ["兔子皮", "rabbit_hide"],
    ["兔子刷怪蛋", "rabbit_spawn_egg"],
    ["兔肉煲", "rabbit_stew"],
    ["兔子脚", "rabbit_foot"],
    ["牧民盔甲纹饰锻造模板", "raiser_armor_trim_smithing_template"],
    ["劫掠兽刷怪蛋", "ravager_spawn_egg"],
    ["生牛肉", "raw_beef"],
    ["生鸡肉", "raw_chicken"],
    ["生鳕鱼", "raw_cod"],
    ["粗铜", "raw_copper"],
    ["粗金", "raw_gold"],
    ["粗铁", "raw_iron"],
    ["生羊肉", "raw_mutton"],
    ["生猪排", "raw_porkchop"],
    ["生兔肉", "raw_rabbit"],
    ["生鲑鱼", "raw_salmon"],
    ["追溯指针", "recovery_compass"],
    ["红色蜡烛", "red_candle"],
    ["红色染料", "red_dye"],
    ["红石粉", "redstone_dust"],
    ["肋骨盔甲纹饰锻造模板", "rib_armor_trim_smithing_template"],
    ["腐肉", "rotten_flesh"],
    ["鞍", "saddle"],
    ["鲑鱼桶", "salmon_bucket"],
    ["鲑鱼刷怪蛋", "salmon_spawn_egg"],
    ["鳞甲", "scute"],
    ["哨兵盔甲纹饰锻造模板", "sentry_armor_trim_smithing_template"],
    ["塑造盔甲纹饰锻造模板", "shaper_armor_trim_smithing_template"],
    ["麦捆纹样陶片", "sheaf_pottery_sherd"],
    ["剪刀", "shears"],
    ["绵羊刷怪蛋", "sheep_spawn_egg"],
    ["树荫纹样陶片", "shelter_pottery_sherd"],
    ["盾牌", "shield"],
    ["锹", "shovel"],
    ["潜影壳", "shulker_shell"],
    ["潜影贝刷怪蛋", "shulker_spawn_egg"],
    ["幽静盔甲纹饰锻造模板", "silence_armor_trim_smithing_template"],
    ["蠹虫刷怪蛋", "silverfish_spawn_egg"],
    ["骷髅马刷怪蛋", "skeleton_horse_spawn_egg"],
    ["骷髅刷怪蛋", "skeleton_spawn_egg"],
    ["头颅纹样陶片", "skull_pottery_sherd"],
    ["史莱姆刷怪蛋", "slime_spawn_egg"],
    ["黏液球", "slimeball"],
    ["嗅探兽刷怪蛋", "sniffer_spawn_egg"],
    ["嗅探纹样陶片", "snort_pottery_sherd"],
    ["猪鼻盔甲纹饰锻造模板", "snout_armor_trim_smithing_template"],
    ["雪傀儡刷怪蛋", "snow_golem_spawn_egg"],
    ["雪球", "snowball"],
    ["光灵箭", "spectral_arrow"],
    ["蜘蛛眼", "spider_eye"],
    ["蜘蛛刷怪蛋", "spider_spawn_egg"],
    ["尖塔盔甲纹饰锻造模板", "spire_armor_trim_smithing_template"],
    ["喷溅型粗制的药水", "splash_awkward_potion"],
    ["喷溅型平凡的药水", "splash_mundane_potion"],
    ["喷溅药水", "splash_potion"],
    ["喷溅型衰变药水", "splash_potion_of_decay"],
    ["喷溅型抗火药水", "splash_potion_of_fire_resistance"],
    ["喷溅型伤害药水", "splash_potion_of_harming"],
    ["喷溅型治疗药水", "splash_potion_of_healing"],
    ["喷溅型隐身药水", "splash_potion_of_invisibility"],
    ["喷溅型跳跃药水", "splash_potion_of_leaping"],
    ["喷溅型幸运药水", "splash_potion_of_luck"],
    ["喷溅型夜视药水", "splash_potion_of_night_vision"],
    ["喷溅型剧毒药水", "splash_potion_of_poison"],
    ["喷溅型再生药水", "splash_potion_of_regeneration"],
    ["喷溅型缓降药水", "splash_potion_of_slow_falling"],
    ["喷溅型迟缓药水", "splash_potion_of_slowness"],
    ["喷溅型力量药水", "splash_potion_of_strength"],
    ["喷溅型迅捷药水", "splash_potion_of_swiftness"],
    ["喷溅型神龟药水", "splash_potion_of_the_turtle_master"],
    ["喷溅型水肺药水", "splash_potion_of_water_breathing"],
    ["喷溅型虚弱药水", "splash_potion_of_weakness"],
    ["喷溅型水瓶", "splash_water_bottle"],
    ["云杉木船", "spruce_boat"],
    ["云杉木运输船", "spruce_boat_with_chest"],
    ["望远镜", "spyglass"],
    ["鱿鱼刷怪蛋", "squid_spawn_egg"],
    ["牛排", "steak"],
    ["木棍", "stick"],
    ["石斧", "stone_axe"],
    ["石锄", "stone_hoe"],
    ["石镐", "stone_pickaxe"],
    ["石锹", "stone_shovel"],
    ["石剑", "stone_sword"],
    ["流浪者刷怪蛋", "stray_spawn_egg"],
    ["炽足兽刷怪蛋", "strider_spawn_egg"],
    ["线", "string"],
    ["糖", "sugar"],
    ["谜之炖菜", "suspicious_stew"],
    ["甜浆果", "sweet_berries"],
    ["蝌蚪刷怪蛋", "tadpole_spawn_egg"],
    ["滞留型浓稠的药水", "thick_lingering_potion"],
    ["浓稠的药水", "thick_potion"],
    ["喷溅型浓稠的药水", "thick_splash_potion"],
    ["潮汐盔甲纹饰锻造模板", "tide_armor_trim_smithing_template"],
    ["药箭", "tipped_arrow"],
    ["火把花种子", "torchflower_seeds"],
    ["不死图腾", "totem_of_undying"],
    ["行商羊驼刷怪蛋", "trader_llama_spawn_egg"],
    ["三叉戟", "trident"],
    ["热带鱼", "tropical_fish"],
    ["热带鱼桶", "tropical_fish_bucket"],
    ["热带鱼刷怪蛋", "tropical_fish_spawn_egg"],
    ["海龟壳", "turtle_shell"],
    ["海龟刷怪蛋", "turtle_spawn_egg"],
    ["不可合成的滞留型药水", "uncraftable_lingering_potion"],
    ["不可合成的药水", "uncraftable_potion"],
    ["不可合成的喷溅型药水", "uncraftable_splash_potion"],
    ["不可合成的药箭", "uncraftable_tipped_arrow"],
    ["不死图腾", "undying_totem"],
    ["恼鬼盔甲纹饰锻造模板", "vex_armor_trim_smithing_template"],
    ["恼鬼刷怪蛋", "vex_spawn_egg"],
    ["村民刷怪蛋", "villager_spawn_egg"],
    ["卫道士刷怪蛋", "vindicator_spawn_egg"],
    ["流浪商人刷怪蛋", "wandering_trader_spawn_egg"],
    ["监守盔甲纹饰锻造模板", "ward_armor_trim_smithing_template"],
    ["监守者刷怪蛋", "warden_spawn_egg"],
    ["诡异菌钓竿", "warped_fungus_on_a_stick"],
    ["水瓶", "water_bottle"],
    ["水桶", "water_bucket"],
    ["向导盔甲纹饰锻造模板", "wayfinder_armor_trim_smithing_template"],
    ["小麦", "wheat"],
    ["小麦种子", "wheat_seeds"],
    ["白色蜡烛", "white_candle"],
    ["白色染料", "white_dye"],
    ["荒野盔甲纹饰锻造模板", "wild_armor_trim_smithing_template"],
    ["女巫刷怪蛋", "witch_spawn_egg"],
    ["凋灵骷髅刷怪蛋", "wither_skeleton_spawn_egg"],
    ["凋灵刷怪蛋", "wither_spawn_egg"],
    ["狼刷怪蛋", "wolf_spawn_egg"],
    ["木斧", "wooden_axe"],
    ["木锄", "wooden_hoe"],
    ["木镐", "wooden_pickaxe"],
    ["木锹", "wooden_shovel"],
    ["木剑", "wooden_sword"],
    ["林地探险家地图", "woodland_explorer_map"],
    ["成书", "written_book"],
    ["黄色蜡烛", "yellow_candle"],
    ["黄色染料", "yellow_dye"],
    ["僵尸疣猪兽刷怪蛋", "zoglin_spawn_egg"],
    ["僵尸马刷怪蛋", "zombie_horse_spawn_egg"],
    ["僵尸刷怪蛋", "zombie_spawn_egg"],
    ["僵尸村民刷怪蛋", "zombie_villager_spawn_egg"],
    ["僵尸猪灵刷怪蛋", "zombified_piglin_spawn_egg"]
])

module.exports = { items }