import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Slider } from "@/components/ui/slider";
import { useConfigStore } from "@/store";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { EASING_FUNCTION_OPTIONS, type EasingFunction } from "@/lib/common";

export function ConfigurationCard() {
    const { duration, setDuration, easing, setEasing } = useConfigStore();

    return (
        <Card className="flex-none w-full lg:w-xs gap-4">
            <CardHeader className="border-b">
                <CardTitle>Configuration</CardTitle>
            </CardHeader>
            <CardContent className="pb-4">
                <div className="grid gap-4">
                    <Field>
                        <FieldLabel>Easing</FieldLabel>
                        <Select items={EASING_FUNCTION_OPTIONS} value={easing} onValueChange={(value) => setEasing(value as EasingFunction)}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select an easing function" />
                            </SelectTrigger>
                            <SelectContent>
                                {
                                    EASING_FUNCTION_OPTIONS.map((option) => (
                                        <SelectItem key={option.value} value={option.value}>
                                            {option.label}
                                        </SelectItem>
                                    ))
                                }
                            </SelectContent>
                        </Select>
                    </Field>
                    <Field>
                        <FieldLabel>Duration</FieldLabel>
                        <Slider min={500} max={5000} step={100} value={duration} onValueChange={(value) => setDuration(value as number)} />
                        <FieldDescription className="text-right">{duration}ms</FieldDescription>
                    </Field>

                </div>
            </CardContent>
        </Card>
    )
}

export default ConfigurationCard;