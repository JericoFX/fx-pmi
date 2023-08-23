<script lang="ts">
	import { Table, TableBody, TableCell, TableHead, TableRow,Status, Button, Icon } from 'yesvelte'
	let color = false
	$:duty = color ? "On Duty" : "Off Duty"
	$:onDutyColor = color ? "success" : "danger"
</script>
<main class="w-full h-full ">

<Table hover class="mt-15">
	<TableHead>
		<TableRow>
			<TableCell>Duty</TableCell>
			<TableCell>Callsign</TableCell>
			<TableCell>First Name</TableCell>
			<TableCell>Last Name</TableCell>
			<TableCell>Phone</TableCell>
			<TableCell>ID</TableCell>
			<TableCell>Vehicle</TableCell>
			<TableCell>Assignment</TableCell>
		</TableRow>
	</TableHead>
	<TableBody>
		<TableRow>
			<TableCell on:click={()=> color = !color}><Status color={onDutyColor}>{duty}</Status></TableCell>
			<TableCell>CDI55</TableCell>
			<TableCell>Jerico</TableCell>
			<TableCell>FX</TableCell>
			<TableCell>098524742</TableCell>
			<TableCell>ASD12345</TableCell>
			<TableCell><Button disabled={!color} ghost >
				<Icon  color="dark" name="car" size="auto"></Icon>
			</Button></TableCell>
			<TableCell><Button disabled={!color}  ghost >
				<Icon  color="dark" name="info-hexagon" size="auto"></Icon>
			</Button></TableCell>

		</TableRow>

		<TableRow>
			<TableCell>Jeffie Lewzey</TableCell>
			<TableCell>Chemical Engineer, Support</TableCell>
			<TableCell>jlewzey1@seesaa.net</TableCell>
			<TableCell>Admin</TableCell>
		</TableRow>

		<TableRow>
			<TableCell>Mallory Hulme</TableCell>
			<TableCell>Geologist IV, Support</TableCell>
			<TableCell>mhulme2@domainmarket.com</TableCell>
			<TableCell>User</TableCell>
		</TableRow>

		<TableRow>
			<TableCell>Dunn Slane</TableCell>
			<TableCell>Research Nurse, Sales</TableCell>
			<TableCell>dslane3@epa.gov</TableCell>
			<TableCell>Owner</TableCell>
		</TableRow>

		<TableRow>
			<TableCell>Emmy Levet</TableCell>
			<TableCell>VP Product Management, Accounting</TableCell>
			<TableCell>elevet4@senate.gov</TableCell>
			<TableCell>Admin</TableCell>
		</TableRow>
	</TableBody>
</Table>	
</main>
